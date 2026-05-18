import { motion } from 'framer-motion';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import { BRAND_LINKS } from '../utils/constants';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="font-heading text-5xl text-primaryText mb-6">Connect.</h1>
        <p className="text-secondaryText font-light text-lg mb-12">
          Whether you have a story to share, a question to ask, or simply wish to say hello, we are always listening.
        </p>
        <div className="space-y-6">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-softAccent mb-2">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a href={BRAND_LINKS.YOUTUBE} target="_blank" rel="noreferrer" className="text-primaryText hover:text-bronze transition-colors">YouTube</a>
              <a href={BRAND_LINKS.FACEBOOK} target="_blank" rel="noreferrer" className="text-primaryText hover:text-bronze transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.form initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8 bg-card p-8 shadow-elegant border border-borderLight/30 rounded-sm">
        <Input label="Name" type="text" placeholder="Jane Doe" />
        <Input label="Email" type="email" placeholder="jane@example.com" />
        <div className="flex flex-col space-y-2">
          <label className="text-xs uppercase tracking-widest text-secondaryText">Message</label>
          <textarea 
            className="w-full bg-secondaryBg border border-borderLight/50 focus:border-bronze focus:ring-1 focus:ring-bronze outline-none px-4 py-3 rounded-sm transition-all text-primaryText font-light resize-none h-32"
            placeholder="Your thoughts..."
          ></textarea>
        </div>
        <Button text="Send Message" isFullWidth />
      </motion.form>
    </div>
  );
}