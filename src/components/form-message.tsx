export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export function FormMessage({ message }: { message: Message }) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md mt-3 text-lg text-indigo-600">
      {"success" in message && <div className="">{message.success}</div>}
      {"error" in message && <div className="">{message.error}</div>}
      {"message" in message && <div className="">{message.message}</div>}
    </div>
  );
}
