"use client";

import React, { useState } from "react";
import { Button, Card, Container, Stack, Text } from "@/components";
import styles from "./page.module.scss";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  return (
    <section className={styles.container}>
      <Container size="sm" padding="md">
        <Card elevation={2}>
          <Stack className={styles.formWrapper} gap="md">
            <Text as="h2" variant="h3">
              Login
            </Text>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" fullWidth>
                Login
              </Button>
            </form>
          </Stack>
        </Card>
      </Container>
    </section>
  );
}
