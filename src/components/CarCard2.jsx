import { Card, Text, Button, TagGroup, Tag, Image } from 'rsuite';


const CarCard = () => {
  return (
    <Card width={320} shaded>
      <Image
        src="/src/images/FranklinRondane.jpeg" alt="Franklin 9B Touring with a panoramic view of the majestic Rondane Mountains in the background"
      />
      <Card.Header as="h5">Shadow</Card.Header>
      <Card.Body>
        Meet Shadow, a spirited little explorer with a heart full of adventure! This charming pup
        loves to roam the fields, soaking up the sights and sounds of nature.
      </Card.Body>
      <Card.Footer>
        <TagGroup>
          <Tag size="sm">🐶 Dog</Tag>
          <Tag size="sm">☀️ Sunny</Tag>
          <Tag size="sm">🌈 Rainbow</Tag>
        </TagGroup>
      </Card.Footer>
    </Card>
  );
};

export default CarCard;