export const dynamic = "force-dynamic";

export default function () {
  return (
    <div>
      <h1>
        the shared value is:{" "}
        <code>{globalThis["SHARED_VALUE"] ?? "undefined"}</code>
      </h1>
    </div>
  );
}
