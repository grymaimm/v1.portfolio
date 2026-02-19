// lib/db.js
import prisma from "./prisma";

/**
 * Ambil project terbaru (public) dengan limit opsional
 */
export async function getLatestProjects(limit = 3) {
  return prisma.project.findMany({
    where: { isPublic: true },
    orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
}

/**
 * Ambil semua project publik
 */
export async function getAllProjects() {
  return prisma.project.findMany({
    where: { isPublic: true },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Ambil project berdasarkan slug
 */
export async function getProjectBySlug(slug) {
  return prisma.project.findUnique({
    where: { slug },
  });
}

/**
 * Ambil project featured
 */
export async function getFeaturedProjects() {
  return prisma.project.findMany({
    where: { isPublic: true, isFeatured: true },
    orderBy: { createdAt: "desc" },
  });
}
