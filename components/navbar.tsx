import Container from "@/components/ui/container";
import { Category, Store } from "@/type";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import NavbarAction from "./navbar-action";
import getCategories from "@/actions/get-categories";
import getStore from "@/actions/get-store";


const navbar: React.FC = async () => {
  const store: Store = await getStore();
  const categories: Category[] = await getCategories();

  return (
    <nav className="bg-white border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0  gap-x-2">
            <p className="font-bold text-xl">
              {store.name.toUpperCase() }
            </p>
          </Link>
          <MainNav data={categories}/>
          <NavbarAction/>
        </div>
      </Container>
    </nav>
  );
};

export default navbar;
