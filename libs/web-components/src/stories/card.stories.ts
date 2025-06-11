import { registerElements } from '../lib/register-elements';
import { CardDetails } from '../lib/card/card-details';

registerElements();

export default {
  title: 'Wc Card',
  component: 'wc-card',
  argTypes: {
    details: { control: 'object' },
  },
};

const cardDetails: CardDetails = {
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate quam quis sem gravida tincidunt. Phasellus efficitur lectus sit amet erat rhoncus volutpat. Fusce elit est, scelerisque eget orci et, consectetur accumsan arcu. Nullam nec nulla ut nulla sollicitudin mollis. Nam eleifend neque at felis volutpat, in vestibulum lacus aliquam.',
  title: 'Lipsum',
  imageUrl:
    './images/businessman-working-modern-compter-document-management-system-virtual-online-documentation.webp',
};

export const DefaultCard = (args: any) => {
  const container = document.createElement('div');

  const cardEl: any = document.createElement('wc-card');
  cardEl.details = args.details;

  cardEl.addEventListener('card-details-get', (event: any) => {
    alert(`Details received: ${JSON.stringify(event.detail)}`);
  });

  container.appendChild(cardEl);

  return container;
};

DefaultCard.args = {
  details: cardDetails,
};
