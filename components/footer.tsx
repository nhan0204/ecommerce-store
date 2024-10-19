import getStore from "@/actions/get-store";
interface FooterProps {}

const Footer: React.FC<FooterProps> = async () => {
  const store = await getStore();
  
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; 2024 {store.name}, Inc. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
