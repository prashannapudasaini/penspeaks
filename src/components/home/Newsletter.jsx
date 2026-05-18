import Button from '../common/Button';
import Input from '../common/Input';

export default function Newsletter() {
  return (
    <section className="w-full py-32 px-6 bg-primaryBg border-t border-borderLight/30">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="font-heading text-4xl text-primaryText">Join the Reading Room.</h2>
        <p className="text-secondaryText font-light text-lg">
          Receive curated essays, book recommendations, and editorial thoughts directly to your inbox. No noise, just prose.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="w-full sm:w-2/3">
            <Input type="email" placeholder="Your email address" />
          </div>
          <Button text="Subscribe" variant="primary" />
        </form>
      </div>
    </section>
  );
}