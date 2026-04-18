export default function AnnouncementBar() {
  const items = [
    "✦ Free shipping on orders above ₹999",
    "✦ 100% Handmade",
    "✦ Aurora Chrome Nails",
    "✦ Reusable Press-On Sets",
    "✦ Sizes XS · S · M · L",
    "✦ Free shipping on orders above ₹999",
    "✦ 100% Handmade",
    "✦ Aurora Chrome Nails",
    "✦ Reusable Press-On Sets",
    "✦ Sizes XS · S · M · L",
  ];
  return (
    <div className="announce">
      <div className="announce-inner">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
