export async function downloadcv() {
  console.log("chamada da funcao ok");
  const { jsPDF } = window.jspdf;

  const cv = document.querySelector("#cv-container");

  const originalOverflow = cv.style.overflow;
  const originalMaxHeight = cv.style.maxHeight;

  // --- REMOVE RESTRIÇÕES QUE CORTAM A CAPTURA ---
  cv.style.overflow = "visible";
  cv.style.maxHeight = "unset";
  await new Promise((r) => setTimeout(r, 50));

  const canvas = await html2canvas(cv, {
    scale: 2,
    scrollX: 0,
    scrollY: -window.scrollY,
    useCORS: true,
  });

  // restaura o layout original
  cv.style.overflow = originalOverflow;
  cv.style.maxHeight = originalMaxHeight;

  const imgData = canvas.toDataURL("image/png");

  // ---------------------------
  // 🔥 CÁLCULO DO TAMANHO REAL DO PDF
  // ---------------------------
  const pxToMm = (px) => px * 0.264583; // conversão exata

  const imgWidthMm = pxToMm(canvas.width);
  const imgHeightMm = pxToMm(canvas.height);

  // cria o PDF exatamente no tamanho da imagem
  const pdf = new jsPDF({
    orientation: imgWidthMm > imgHeightMm ? "l" : "p",
    unit: "mm",
    format: [imgWidthMm, imgHeightMm]
  });

  pdf.addImage(imgData, "PNG", 0, 0, imgWidthMm, imgHeightMm);
  pdf.save("curriculo-alexsandro-silva.pdf");
}
