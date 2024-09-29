import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

//database of images
const tops = [
  "my-react-app\src\assets\ClosetPage\assets\ShirtFormal.png",
  "/placeholder.svg?height=100&width=100&text=Top+3",
];
const bottoms = [
  "/placeholder.svg?height=100&width=100&text=Bottom+1",
  "/placeholder.svg?height=100&width=100&text=Bottom+2",
  "/placeholder.svg?height=100&width=100&text=Bottom+3",
];
const accessories = [
  "my-react-app\src\assets\ClosetPage\assets\hoodie.jfif",
  "/placeholder.svg?height=100&width=100&text=Accessory+2",
  "/placeholder.svg?height=100&width=100&text=Accessory+3",
];

function MainPlanOutfit() {
  const [date, setDate] = useState(new Date());
  const [outfits, setOutfits] = useState([]);
  const [newOutfit, setNewOutfit] = useState({
    tops: [],
    bottoms: [],
    accessories: [],
  });
  const [weather, setWeather] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    loadOutfits();
    fetchWeather();
  }, []);

  const loadOutfits = () => {
    const savedOutfits = localStorage.getItem('outfits');
    if (savedOutfits) {
      setOutfits(JSON.parse(savedOutfits));
    }
  };

  const saveOutfits = (updatedOutfits) => {
    localStorage.setItem('outfits', JSON.stringify(updatedOutfits));
    setOutfits(updatedOutfits);
  };

  const fetchWeather = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=YOUR_API_KEY&units=metric`);
      const data = await response.json();
      setWeather({
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].main,
      });
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeather({ temperature: 20, condition: 'Sunny' }); // Fallback weather
    }
  };

  const handleCreateOutfit = () => {
    if (date && newOutfit.tops.length > 0 && newOutfit.bottoms.length > 0) {
      const outfitToSave = {
        date: date.toISOString(),
        items: newOutfit,
        weather,
      };
      
      const updatedOutfits = [...outfits, outfitToSave];
      saveOutfits(updatedOutfits);
      setNewOutfit({ tops: [], bottoms: [], accessories: [] });
      setIsDialogOpen(false);
      setStep(0);
    }
  };

  const getOutfitForDate = (date) => {
    if (!date) return null;
    return outfits.find(
      (outfit) => new Date(outfit.date).toDateString() === date.toDateString()
    );
  };

  const handleItemSelection = (item, type) => {
    setNewOutfit((prev) => {
      const updatedItems = prev[type].includes(item)
        ? prev[type].filter((i) => i !== item)
        : [...prev[type], item];
      return { ...prev, [type]: updatedItems };
    });
  };

  const renderOutfitItems = (items) => {
    return items.map((item, index) => (
      <img
        key={index}
        src={item}
        alt={`Item ${index + 1}`}
        className="w-16 h-16 object-cover rounded-md"
      />
    ));
  };

  const renderStepContent = () => {
    const stepConfig = [
      { title: "Choose Tops", type: "tops", options: tops },
      { title: "Choose Bottoms", type: "bottoms", options: bottoms },
      { title: "Choose Accessories", type: "accessories", options: accessories },
    ][step];

    return (
      <div className="grid gap-4 py-4">
        <h3 className="text-lg font-semibold">{stepConfig.title}</h3>
        <div className="grid grid-cols-3 gap-4">
          {stepConfig.options.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`${stepConfig.type}-${index}`}
                checked={newOutfit[stepConfig.type].includes(item)}
                onChange={() => handleItemSelection(item, stepConfig.type)}
                className="form-checkbox text-[#D4AF37]"
              />
              <label
                htmlFor={`${stepConfig.type}-${index}`}
                className="flex flex-col items-center space-y-2 rounded-md border-2 border-[#D4AF37] p-2 hover:bg-[#D4AF37] hover:bg-opacity-20 cursor-pointer"
              >
                <img
                  src={item}
                  alt={`${stepConfig.type} ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <span className="text-sm font-medium">
                  {stepConfig.type.slice(0, -1)} {index + 1}
                </span>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-[#D4AF37] p-4">
      <h1 className="text-3xl font-bold mb-4">Outfit Planner</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="mb-4">
            <label htmlFor="date-picker" className="block text-lg font-semibold mb-2">Select Date</label>
            <input
              id="date-picker"
              type="date"
              value={format(date, 'yyyy-MM-dd')}
              onChange={(e) => setDate(new Date(e.target.value))}
              className="w-full p-2 bg-gray-800 text-[#D4AF37] border border-[#D4AF37] rounded-md"
            />
          </div>
          {weather && (
            <div className="mb-4 p-4 bg-gray-800 rounded-md">
              <h2 className="text-lg font-semibold mb-2">Weather</h2>
              <p>Temperature: {weather.temperature}°C</p>
              <p>Condition: {weather.condition}</p>
            </div>
          )}
        </div>
        <div className="flex-1">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="w-full mb-4 py-2 px-4 bg-[#D4AF37] text-black rounded-md hover:bg-opacity-80"
          >
            Create Outfit
          </button>
          {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-800 p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">
                  {step === 0
                    ? "Choose Tops"
                    : step === 1
                    ? "Choose Bottoms"
                    : "Choose Accessories"}
                </h2>
                {renderStepContent()}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setStep(Math.max(0, step - 1))}
                    disabled={step === 0}
                    className="px-4 py-2 bg-gray-600 text-white rounded-md disabled:opacity-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      if (step < 2) {
                        setStep(step + 1);
                      } else {
                        handleCreateOutfit();
                      }
                    }}
                    className="px-4 py-2 bg-[#D4AF37] text-black rounded-md hover:bg-opacity-80"
                  >
                    {step === 2 ? "Finish" : "Next"}
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="bg-gray-800 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-2">
              {date ? format(date, "MMMM d, yyyy") : "Select a date"}
            </h2>
            {date && (
              <div>
                {getOutfitForDate(date) ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Tops</h3>
                      <div className="flex flex-wrap gap-2">
                        {renderOutfitItems(getOutfitForDate(date).items.tops)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Bottoms</h3>
                      <div className="flex flex-wrap gap-2">
                        {renderOutfitItems(getOutfitForDate(date).items.bottoms)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold">Accessories</h3>
                      {getOutfitForDate(date).items.accessories.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {renderOutfitItems(getOutfitForDate(date).items.accessories)}
                        </div>
                      ) : (
                        <p>None</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <p>No outfit planned</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPlanOutfit;