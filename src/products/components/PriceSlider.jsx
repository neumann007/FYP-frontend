import "./Slider.css";

const PriceSlider = () => {
  return (
    <div class="PB-range-slider-div">
      <p class="PB-range-slidervalue">0</p>
      <input
        type="range"
        min="0"
        max="1000"
        class="PB-range-slider"
        id="myRange"
      />

      <p class="PB-range-slidervalue">1000</p>
    </div>
  );
};

export default PriceSlider;
