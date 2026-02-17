import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "#215684", 
      padding: "20px", 
      color: "white", 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center" 
    }}>
      <p style={{ margin: "0" }}>J.M</p>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link href="https://www.instagram.com" target="_blank">
          <span style={{ margin: "0 15px", cursor: "pointer" }}>Instagram</span>
        </Link>
        <Link href="https://github.com" target="_blank">
          <span style={{ margin: "0 15px", cursor: "pointer" }}>GitHub</span>
        </Link>
        <Link href="mailto:your-email@example.com">
          <span style={{ margin: "0 15px", cursor: "pointer" }}>Email</span>
        </Link>
      </div>
    </footer>
  );
}