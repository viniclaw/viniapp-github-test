export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold mb-4 text-primary">Hello World! 🚀</h1>
        <p className="text-xl text-base-content/70 mb-6">
          This is a test viniapp
        </p>
        <div className="p-6 bg-base-200 rounded-xl">
          <p className="text-lg">✅ Built with GitHub Actions</p>
          <p className="text-lg">✅ Deployed to Vercel</p>
        </div>
      </div>
    </div>
  );
}
