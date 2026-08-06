const Header = ({
  title,
  subtitle,
  rightContent,
  titleClassName = "",
  subtitleClassName = "",
}) => {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-blue-500 shadow-xl p-10 flex justify-between items-center">
      <div>
        <h1
          className={` font-bold text-white ${titleClassName}`}
        >
          {title}
        </h1>

        <p
          className={`mt-2 text-lg text-blue-100/90 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      </div>

      {rightContent}
    </div>
  );
};

export default Header;