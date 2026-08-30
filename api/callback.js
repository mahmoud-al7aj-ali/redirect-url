export default function handler(req, res) {
  const params = new URLSearchParams(req.query).toString();
  res.redirect(`http://localhost:4200?${params}`);
}
