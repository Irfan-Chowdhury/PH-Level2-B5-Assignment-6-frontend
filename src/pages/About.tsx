// export default function About() {
//   return (
//     <>
//       <div className="py-16 px-4 container mx-auto">
//         <h1> This is About component </h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui
//           eos. Architecto quisquam odit soluta fugit quos ab unde, voluptatem
//           eos necessitatibus nesciunt, in neque consequatur adipisci velit
//           accusantium illum.
//         </p>
//       </div>
//     </>
//   );
// }


import { motion } from "framer-motion";
import { Users, Target, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About DigiWallet
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            A secure, fast, and user-friendly way to manage your money digitally — inspired by bKash and Nagad, built for the future.
          </p>
        </div>
      </section>

      {/* Service Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >


          <img
            src="https://ui-avatars.com/api/?name=Digital+Wallet&background=4F46E5&color=fff&size=128"
            alt="Digital Wallet"
            className="w-24 h-24 mx-auto rounded-full  shadow-lg rounded-2xl "
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              DigiWallet started with a simple idea: to make digital transactions seamless and accessible for everyone.  
              We believe in empowering people with tools to send, receive, and manage money without barriers.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With security and user experience at the core, DigiWallet is designed for individuals, agents, and admins who need a reliable financial solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <Target className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our mission is to create a safe, fast, and inclusive digital financial ecosystem where anyone can access financial services anytime, anywhere — securely and transparently.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <Users className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Rahim Uddin</h3>
              <p className="text-indigo-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">Visionary leader with a passion for digital finance and technology.</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Ayesha Karim</h3>
              <p className="text-indigo-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">Tech enthusiast ensuring our platform is secure, fast, and scalable.</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Karim Hassan</h3>
              <p className="text-indigo-600 mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm">Designs delightful and accessible user experiences for all roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <HeartHandshake className="w-12 h-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Transparency, security, and accessibility guide every decision we make.  
            We are committed to building trust and delivering financial freedom to our users.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;