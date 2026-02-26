const DOCUMENT_URL =
  'https://yarproutesafstorage.blob.core.windows.net/saf-document-dev/DometicFlorida__1d129633ca28c99d50b93b46da28f774';

export default function DocumentViewer() {
  return (
    <div className="flex-1 overflow-auto bg-[#f4f5f7] p-4">
      <div className="mx-auto h-full w-full max-w-[760px] overflow-hidden rounded-sm border border-[#d0d5dd] bg-white shadow-sm">
        <iframe
          src={DOCUMENT_URL}
          title="Original Document"
          className="h-full min-h-[860px] w-full border-0"
        />
      </div>
    </div>
  );
}
