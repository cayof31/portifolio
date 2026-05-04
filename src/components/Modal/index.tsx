"use client";

import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title = "Texto completo",
  children,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Fechar modal"
        onClick={onClose}
        className="absolute inset-0"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="absolute right-0 top-0 h-full w-full md:w-1/2 bg-white shadow-2xl"
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h2 className="text-xl font-bold text-black">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-md px-3 py-1 text-sm font-medium text-black hover:bg-gray-100"
            >
              Fechar
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="prose max-w-none text-black">{children}</div>
          </div>
        </div>
      </aside>
    </div>
  );
}