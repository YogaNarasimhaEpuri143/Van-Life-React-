export async function getVans() {
  const res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = res.json();
  return data;
}

export async function getVanDetail(id) {
  const res = await fetch(`/api/vans/${id}`);
  if (!res.ok) {
    throw {
      message: "Failed to fetch van Detail",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = res.json();
  return data;
}

export async function getHostVans() {
  const res = await fetch("/api/host/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch Host vans",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = res.json();
  return data;
}
