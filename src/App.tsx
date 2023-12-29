import SignUpModal from "./components/SignUpModal";
import TermsOfServiceModal from "./components/TermsOfServiceModal";
import useSignUpModalStore from "./store/useSignUpModalStore";
import useTermsOfServiceModalStore from "./store/useTermsOfServiceModalStore";

function App() {
  const { onOpen } = useSignUpModalStore();
  const { onOpen: onTermsOfServiceOpen } = useTermsOfServiceModalStore();

  return (
    <div className="space-y-5 h-screen p-10 text-center">
      <h1 className="text-lg font-bold">Modals</h1>
      <div className="flex flex-row gap-4 justify-center">
        <button
          className="border text-sm border-white p-2 rounded bg-blue-500 text-white hover:bg-blue-400 transition"
          onClick={onOpen}
        >
          Open SignUp Modal
        </button>
        <button
          className="border text-sm border-white p-2 rounded bg-blue-500 text-white hover:bg-blue-400 transition"
          onClick={onTermsOfServiceOpen}
        >
          Open TermsOfService Modal
        </button>
      </div>
      <SignUpModal />
      <TermsOfServiceModal />
    </div>
  );
}

export default App;
