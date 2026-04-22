export default function Sidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-lg p-4 rounded-xl">
      <ul className="space-y-4 text-white">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}