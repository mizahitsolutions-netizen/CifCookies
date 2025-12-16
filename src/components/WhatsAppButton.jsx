export default function WhatsAppButton() {
  const phoneNumber = "917845035095"; // ← replace with your WhatsApp number
  const message = "Hi! I'm interested in Crumbella cookies";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-2xl transition-transform duration-300 hover:scale-105"
    >
      {/* WhatsApp Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.82.735 5.467 2.02 7.78L0 32l8.396-1.98A15.89 15.89 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.09c-2.512 0-4.864-.73-6.856-1.984l-.49-.306-4.982 1.175 1.157-4.853-.319-.499A12.97 12.97 0 0 1 3.09 16C3.09 8.778 8.778 3.09 16 3.09S28.91 8.778 28.91 16 23.222 29.09 16 29.09zm7.462-9.152c-.407-.204-2.405-1.186-2.776-1.322-.37-.136-.64-.204-.908.204-.272.407-1.044 1.322-1.28 1.593-.236.272-.472.306-.879.102-.407-.204-1.717-.633-3.27-2.02-1.21-1.08-2.026-2.417-2.262-2.824-.236-.407-.025-.626.179-.83.183-.183.407-.472.61-.708.204-.236.272-.407.407-.679.136-.272.068-.51-.034-.713-.102-.204-.908-2.19-1.245-3.003-.327-.79-.66-.683-.908-.695-.236-.01-.51-.01-.785-.01-.272 0-.713.102-1.085.51-.37.407-1.424 1.39-1.424 3.39 0 2 1.458 3.932 1.66 4.204.204.272 2.87 4.385 6.957 6.144.972.42 1.73.67 2.32.858.975.31 1.864.267 2.566.162.783-.117 2.405-.983 2.744-1.932.339-.95.339-1.763.236-1.932-.102-.17-.37-.272-.777-.476z" />
      </svg>

      <span className="hidden sm:inline font-semibold">
        Chat on WhatsApp
      </span>
    </a>
  );
}
