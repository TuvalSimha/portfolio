import NavLink from "./nav-link";

type Link = {
  title: string;
  path: string;
};

const MenuOverlay = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
