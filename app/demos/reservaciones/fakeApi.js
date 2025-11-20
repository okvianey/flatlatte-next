// fakeApi.js — Simula endpoints reales usando localStorage

export function fakeDelay(ms = 600) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const STORAGE_KEY = "demo_reservaciones";

export async function createReservation(data) {
  await fakeDelay(); // simula tiempo de red

  const current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const newItem = {
    id: Date.now(),
    ...data,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([newItem, ...current]));
  return newItem;
}

export async function getReservations() {
  await fakeDelay();
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

export async function clearReservations() {
  await fakeDelay();
  localStorage.setItem(STORAGE_KEY, "[]");
}
