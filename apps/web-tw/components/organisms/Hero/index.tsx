import HeadingSide from './includes/HeadingSide';
import MenuSide from './includes/MenuSide';

export default function Hero() {
  return (
    <div className="flex flex-row">
      <HeadingSide />

      <MenuSide />
    </div>
  );
}
