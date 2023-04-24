import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Nunc non blandit massa enim nec dui nunc. Nulla at volutpat diam ut
            venenatis tellus in metus. Sollicitudin nibh sit amet commodo nulla
            facilisi nullam vehicula. Enim ut sem viverra aliquet eget sit amet
            tellus.
          </p>
          <p>All rights are not reserved..</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Random text</p>
            <p className="my-5">Random text</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Random text</p>
            <p className="my-5">Random text</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
