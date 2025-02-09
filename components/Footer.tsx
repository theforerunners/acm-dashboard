import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <HomeIcon width={25} /> R.V.R &amp; J.C College of Engineering
            </h3>
            <ul className="space-y-2">
              <li>Chandramoulipuram</li>
              <li>Chowdavaram</li>
              <li>Guntur</li>
              <li>Andhra Pradesh</li>
              <li>522019</li>
            </ul>
            <h3 className="text-2xl font-bold mt-6 mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <Link href="mailto:theforerunnersacm@rvrjc.ac.in">
                theforerunnersacm@rvrjc.ac.in
              </Link>
            </p>
            <p>
              Phone: <Link href="tel:08632288254">08632288254</Link>
            </p>
            <p className="flex items-center gap-2 mt-2">
              <FaInstagram className="text-white" size={20} />
              <Link href="https://www.instagram.com/acm_rvr">@acm_rvr</Link>
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15321.420183081194!2d80.3220854!3d16.2535638!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a76e740000001%3A0xc41c8498715c6da0!2sStudent!5e0!3m2!1sen!2sin!4v1543765739210"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
