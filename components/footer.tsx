export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 w-full border-t border-orange-100 bg-white/90 backdrop-blur-md py-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-8 px-6">
        <div className="text-sm text-orange-900/80">
          <a href="mailto:ctiu@addu.edu.ph" className="hover:text-orange-600 transition-colors"><span className="font-bold text-orange-900">Contact me: </span>ctiu@addu.edu.ph</a>
        </div>
        {/* <a href="mailto:ctiu@addu.edu.ph" className="rounded-full bg-orange-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-orange-700 hover:shadow-orange-500/25">
          Send Email
        </a> */}
      </div>
    </footer>
  );
}