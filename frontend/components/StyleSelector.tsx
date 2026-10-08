"use client";

import { Check, Palette, Sparkles } from "lucide-react";
import { allDesigns, colorPalette, designLevels } from "../app/designs";
import styles from "../app/page.module.css";

type Props = {
  value: string;
  accent: string;
  fontSize: number;
  onSelect: (id: string) => void;
  onAccentChange: (value: string) => void;
  onFontSizeChange: (value: number) => void;
};

export default function StyleSelector({
  value,
  accent,
  fontSize,
  onSelect,
  onAccentChange,
  onFontSizeChange,
}: Props) {
  const selected = allDesigns.find((design) => design.id === value);

  return (
    <div className={styles.form}>
      <div className={styles.styleWelcome}>
        <div className={styles.styleWelcomeIcon}>
          <Sparkles size={21} />
        </div>
        <div>
          <strong>Make it unmistakably yours</strong>
          <p>36 designs, your color, and a resume that feels like you.</p>
        </div>
      </div>

      <div className={styles.selectedDesign}>
        <span>YOUR CURRENT DESIGN</span>
        <strong>{selected?.name ?? "The Editorial"}</strong>
        <span className={styles.selectedDesignCount}>
          36 DESIGNS · 3 COLLECTIONS
        </span>
      </div>

      {designLevels.map((level, levelIndex) => (
        <section className={styles.designLevel} key={level.id}>
          <header className={styles.designLevelHead}>
            <div>
              <span className={styles.designLevelKicker}>{level.name}</span>
              <h3>
                {level.id === "classic"
                  ? "Classic"
                  : level.id === "signature"
                    ? "Signature"
                    : "Creative"}
              </h3>
              <p>{level.subtitle}</p>
            </div>
            <span className={styles.designCount}>12 DESIGNS</span>
          </header>
          <div className={styles.designGrid}>
            {level.designs.map((design, index) => {
              const isSelected = design.id === value;
              return (
                <button
                  className={`${styles.designCard} ${isSelected ? styles.designCardSelected : ""}`}
                  type="button"
                  key={design.id}
                  aria-pressed={isSelected}
                  aria-label={`${design.name}: ${design.note}`}
                  onClick={() => onSelect(design.id)}
                >
                  <span
                    className={`${styles.designMini} ${styles[`miniPattern${index + 1}`]}`}
                    data-design={design.id}
                    style={{ "--accent": accent } as React.CSSProperties}
                  >
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className={styles.designCardName}>{design.name}</span>
                  <span className={styles.designCardNote}>{design.note}</span>
                  {isSelected && (
                    <span className={styles.designCheck}>
                      <Check size={13} />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          {levelIndex < designLevels.length - 1 && (
            <div className={styles.levelDivider} />
          )}
        </section>
      ))}

      <section className={styles.appearanceCard}>
        <div className={styles.appearanceHead}>
          <Palette size={17} />
          <div>
            <strong>Color & typography</strong>
            <p>Fine-tune your chosen design.</p>
          </div>
        </div>

        <div className={styles.colorHead}>
          <label>ACCENT COLOR</label>
          <span>{accent.toUpperCase()}</span>
        </div>
        <div className={styles.colorOptions}>
          {colorPalette.map((color) => (
            <button
              className={`${styles.colorOption} ${accent.toLowerCase() === color.value.toLowerCase() ? styles.colorOptionSelected : ""}`}
              key={color.value}
              type="button"
              title={color.name}
              aria-label={`Use ${color.name} accent color`}
              aria-pressed={accent.toLowerCase() === color.value.toLowerCase()}
              onClick={() => onAccentChange(color.value)}
              style={{ backgroundColor: color.value }}
            >
              {accent.toLowerCase() === color.value.toLowerCase() && (
                <Check size={15} />
              )}
            </button>
          ))}
          <label className={styles.customColor} title="Pick a custom color">
            <input
              aria-label="Choose a custom accent color"
              type="color"
              value={accent}
              onChange={(event) => onAccentChange(event.target.value)}
            />
            <span>+</span>
          </label>
        </div>

        <div className={styles.fontSizeHead}>
          <div>
            <label>RESUME TEXT SIZE</label>
            <p>Make the details as readable as you like.</p>
          </div>
          <span className={styles.fontSizeValue}>{fontSize}px</span>
        </div>
        <div className={styles.fontSizeOptions}>
          {[12, 14, 16].map((size) => (
            <button
              key={size}
              type="button"
              aria-pressed={fontSize === size}
              className={`${styles.fontSizeOption} ${fontSize === size ? styles.fontSizeOptionSelected : ""}`}
              onClick={() => onFontSizeChange(size)}
            >
              <span
                style={{ fontSize: size === 12 ? 12 : size === 14 ? 14 : 16 }}
              >
                Aa
              </span>
              {size === 12 ? "Regular" : size === 14 ? "Large" : "Extra large"}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
