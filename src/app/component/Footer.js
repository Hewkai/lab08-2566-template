export const Footer = (prop) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {prop.year} {prop.name} {prop.ID}
      </p>
    </div>
  );
};
