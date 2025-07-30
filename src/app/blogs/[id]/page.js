"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Box, Container, Typography, Button } from "@mui/material";
import useApiAuth from "@/app/components/useApiAuth";
import axios from "axios";

export default function blogsDetail() {
  const { id } = useParams();
  const blogId = Array.isArray(id) ? id[0] : id;

  const router = useRouter();
  const { getData } = useApiAuth();
  const [blogs, setblogs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!blogId) return;
    getData(
      `/api/blogs/${blogId}`,
      (res) => {
        const blogsObj = res?.data?.data || res?.data || res;
        setblogs(blogsObj);
        setLoading(false);
      },
      (err) => {
        console.log(" ~ useEffect ~ err:", err);
        setLoading(false);
      }
    );
  }, [blogId]);

  if (loading)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <span className="loader" />
      </Container>
    );

  if (!blogs)
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          blogs not found
        </Typography>
        <Button onClick={() => router.back()}>Back</Button>
      </Container>
    );

  return (
    <>
      <div
        style={{
          backgroundColor: "#418ED6",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{ textAlign: "center", mb: 4, color: "white" }}
        >
          {blogs.title}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
      <Container>
        {blogs.thumbnail && (
          <img
            src={`https://admin.eazisols.com/${blogs.thumbnail}`} 
            alt={blogs.title}
            style={{
              maxWidth: "300px",
              minHeight: "300px",
              borderRadius: 8,
              marginBottom: 20,
               objectFit: "cover" 
            }}
          />
        )}

        {blogs.description && (
          <Box
            mb={4}
            p={3}
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Description
            </Typography>
            <div
              dangerouslySetInnerHTML={{ __html: blogs.description }}
              style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
            />
          </Box>
        )}

        {/* {blogs.responsibilities && (
          <Box
            mb={4}
            p={3}
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Responsibilities
            </Typography>
            <Typography whiteSpace="pre-line">
              {blogs.responsibilities}
            </Typography>
          </Box>
        )}

        {blogs.requirements && (
          <Box
            mb={4}
            p={3}
            sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}
          >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Requirements
            </Typography>
            <Typography whiteSpace="pre-line">{blogs.requirements}</Typography>
          </Box>
        )} */}
      </Container>
    </>
  );
}
