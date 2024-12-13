

const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="footer border-t flex justify-center">
  <nav className="p-10 ">
    <h6 className="font-bold text-xl text-gray-700">Services</h6>
    <a className="link link-hover text-lg text-gray-400">Branding</a>
    <a className="link link-hover text-lg text-gray-400">Design</a>
    <a className="link link-hover text-lg text-gray-400">Marketing</a>
    <a className="link link-hover text-lg text-gray-400">Advertisement</a>
  </nav>
  <nav className="p-10 ">
    <h6 className="font-bold text-xl text-gray-700">Company</h6>
    <a className="link link-hover text-lg text-gray-400">About us</a>
    <a className="link link-hover text-lg text-gray-400">Contact</a>
    <a className="link link-hover text-lg text-gray-400">Jobs</a>
    <a className="link link-hover text-lg text-gray-400">Press kit</a>
  </nav>
  <nav className="p-10 ">
    <h6 className="font-bold text-xl text-gray-700">Legal</h6>
    <a className="link link-hover text-lg text-gray-400">Terms of use</a>
    <a className="link link-hover text-lg text-gray-400">Privacy policy</a>
    <a className="link link-hover text-lg text-gray-400">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;