import { useState } from "react";
import axios from "axios";
import "./Order.css";

export default function Order() {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [notes, setNotes] = useState("");

  const handleIngredientChange = (event) => {
    const ingredient = event.target.value;

    if (ingredients.includes(ingredient)) {
      setIngredients(
        ingredients.filter((item) => item !== ingredient)
      );
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const isNameValid = name.trim().length >= 3;

  const isSizeValid = size !== "";

  const areIngredientsValid =
    ingredients.length >= 4 &&
    ingredients.length <= 10;

  const isFormValid =
    isNameValid &&
    isSizeValid &&
    areIngredientsValid;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const orderData = {
      isim: name,
      boyut: size,
      malzemeler: ingredients,
      özel: notes,
    };

    try {
      const response = await axios.post(
        "https://reqres.in/api/pizza",
        orderData,
        {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        }
      );

      console.log("Sipariş yanıtı:", response.data);
    } catch (error) {
      console.error(
        "Sipariş gönderilirken hata oluştu:",
        error
      );
    }
  };

  return (
    <div className="order-page">
      <h1>Sipariş Ver</h1>

      <form onSubmit={handleSubmit}>
        {/* İsim */}
        <div>
          <label htmlFor="name">İsim</label>

          <input
            id="name"
            type="text"
            placeholder="İsminizi giriniz"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          {!isNameValid && name.length > 0 && (
            <p className="error-message">
              İsim en az 3 karakter olmalıdır.
            </p>
          )}
        </div>

        {/* Pizza boyutu */}
        <div>
          <h3>Boyut</h3>

          <label>
            <input
              type="radio"
              name="size"
              value="small"
              checked={size === "small"}
              onChange={(event) => setSize(event.target.value)}
            />
            Küçük
          </label>

          <label>
            <input
              type="radio"
              name="size"
              value="medium"
              checked={size === "medium"}
              onChange={(event) => setSize(event.target.value)}
            />
            Orta
          </label>

          <label>
            <input
              type="radio"
              name="size"
              value="large"
              checked={size === "large"}
              onChange={(event) => setSize(event.target.value)}
            />
            Büyük
          </label>

          {!isSizeValid && (
            <p className="error-message">
              Lütfen pizza boyutunu seçin.
            </p>
          )}
        </div>

        {/* Malzemeler */}
        <div>
          <h3>Malzemeler</h3>

          <label>
            <input
              type="checkbox"
              value="peynir"
              checked={ingredients.includes("peynir")}
              onChange={handleIngredientChange}
            />
            Peynir
          </label>

          <label>
            <input
              type="checkbox"
              value="sucuk"
              checked={ingredients.includes("sucuk")}
              onChange={handleIngredientChange}
            />
            Sucuk
          </label>

          <label>
            <input
              type="checkbox"
              value="mantar"
              checked={ingredients.includes("mantar")}
              onChange={handleIngredientChange}
            />
            Mantar
          </label>

          <label>
            <input
              type="checkbox"
              value="zeytin"
              checked={ingredients.includes("zeytin")}
              onChange={handleIngredientChange}
            />
            Zeytin
          </label>

          <label>
            <input
              type="checkbox"
              value="biber"
              checked={ingredients.includes("biber")}
              onChange={handleIngredientChange}
            />
            Biber
          </label>

          <label>
            <input
              type="checkbox"
              value="misir"
              checked={ingredients.includes("misir")}
              onChange={handleIngredientChange}
            />
            Mısır
          </label>

          <p>
            Seçilen malzeme sayısı: {ingredients.length}
          </p>

          {ingredients.length > 0 &&
            ingredients.length < 4 && (
              <p className="error-message">
                En az 4 malzeme seçmelisiniz.
              </p>
            )}

          {ingredients.length > 10 && (
            <p className="error-message">
              En fazla 10 malzeme seçebilirsiniz.
            </p>
          )}
        </div>

        {/* Notlar */}
        <div>
          <label htmlFor="notes">Notlar</label>

          <textarea
            id="notes"
            placeholder="Siparişinizle ilgili notunuz..."
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />
        </div>

        {/* Sipariş Ver */}
        <button
          type="submit"
          disabled={!isFormValid}
        >
          Sipariş Ver
        </button>
      </form>
    </div>
  );
}