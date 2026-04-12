export const postButtonBaseStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "96px",
  height: "38px",
  padding: "0 16px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: 600,
  textDecoration: "none",
  cursor: "pointer",
  boxSizing: "border-box",
};

export const postButtonPrimaryStyle = {
  ...postButtonBaseStyle,
  border: "1px solid #1f6feb",
  backgroundColor: "#1f6feb",
  color: "#fff",
};

export const postButtonSecondaryStyle = {
  ...postButtonBaseStyle,
  border: "1px solid #d0d7de",
  backgroundColor: "#fff",
  color: "#24292f",
};

export const postButtonDangerStyle = {
  ...postButtonBaseStyle,
  border: "1px solid #d11a2a",
  backgroundColor: "#fff",
  color: "#d11a2a",
};

export const postButtonLinkStyle = {
  ...postButtonBaseStyle,
  border: "1px solid #d0d7de",
  backgroundColor: "#fff",
  color: "#24292f",
};
