import React from 'react';
import { faqData } from "./constant";
const Faq = () => {
  const [Active, setActive] = useState(null);
  const handleActiveButton = (index) => {
    setActive(index === Active ? null : index);
  };
  return (
    <div className=" max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-center text-3xl font-bold py-8">
        Frequently Asked Questions
      </h1>
      {faqData.map((items) => {
        return (
          <div key={items} className="mb-4 py-4 border-b border-gray-300">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => {
                handleActiveButton(items);
              }}
            >
              <h1 className="text-xl font-semibold text-gray-800">
                {items.question}
              </h1>
              <span> {Active === items ? "-" : "+"}</span>
            </div>
            {Active === items && (
              <p className="text-gray-600">{items.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Faq;
