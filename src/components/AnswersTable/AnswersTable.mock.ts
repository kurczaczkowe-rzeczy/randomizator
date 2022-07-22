import uuid from 'react-uuid';
import _map from 'lodash/map';
import _random from 'lodash/random';
import _slice from 'lodash/slice';
import _words from 'lodash/words';

/* eslint-disable max-len */
const lorem = _words( `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, ducimus eos eveniet facere facilis illo
  impedit laboriosam laborum maxime molestias necessitatibus non placeat quo recusandae repellat saepe vel, vero,
  voluptas. Adipisci maiores necessitatibus quis. Ex fugiat, minima molestias provident sapiente similique soluta unde
  velit voluptate voluptatibus? Deserunt eum, fuga iure maxime, minima mollitia, neque numquam possimus quod sint
  sit tempora. Accusantium adipisci aliquam beatae deserunt dicta dolores ducimus est laboriosam magni, minus nostrum nulla
  numquam provident quas quasi qui ratione recusandae reiciendis, rem reprehenderit repudiandae tempore vitae
  voluptas. Iste, veniam! Cum ea ex laborum odio, officia quisquam saepe veniam. Corporis distinctio dolor, dolorem incidunt inventore
  omnis optio quibusdam rem repellendus voluptatem. Consectetur, esse odio perspiciatis provident quos repudiandae
  temporibus voluptatem. Blanditiis, iure voluptates! Commodi est eum in magni molestias officia porro sint voluptatum! Esse ex minima
  tempora. Aut cum, deserunt expedita, fugit libero, maiores maxime nam non quae quis veniam? Commodi dicta eaque eligendi est explicabo incidunt molestiae neque perspiciatis quidem? Consectetur deleniti
  dignissimos error fugiat maiores modi, nihil non optio quaerat quasi quia quibusdam quidem velit. Eos, expedita,
  inventore. Aliquam aliquid commodi dolorem enim esse, est eveniet ex laboriosam magnam necessitatibus non, obcaecati
  pariatur perferendis perspiciatis possimus, quo reiciendis veniam. Asperiores aspernatur atque culpa nihil
  nostrum quis repellendus totam? Doloribus excepturi exercitationem perferendis reprehenderit! Eligendi labore minima nulla placeat sit!
  Adipisci consequatur, corporis doloribus ea, earum expedita hic id libero magni nemo praesentium reiciendis
  sequi vel! Debitis, fugiat, necessitatibus? Aperiam consectetur consequatur, consequuntur cum dolore fugit illo magni molestias omnis, optio rerum vero,
  vitae voluptate. Amet consequuntur et harum nam nulla obcaecati perferendis quis sapiente. Ex numquam quam rem. Alias animi beatae consequatur cupiditate dignissimos dolore dolorem dolorum, est ex excepturi laborum libero
  maiores nihil officiis quis reprehenderit sed, similique soluta, tempore unde veritatis vitae voluptas
  voluptatum? Amet, delectus. Aperiam asperiores atque aut cupiditate delectus explicabo facere fugiat ipsam laudantium libero maxime
  nesciunt nisi nostrum obcaecati officia quaerat quibusdam saepe sed suscipit, vitae. Debitis fugit maxime
  officia quibusdam rerum. Aliquam, animi, culpa deserunt doloremque esse et eveniet harum iusto labore magni nam nisi obcaecati porro
  quisquam, ratione ullam vel veniam! Accusantium assumenda autem dolor ea natus qui similique ullam? Ipsa, magnam mollitia? Accusamus accusantium, animi atque dicta ea fugiat inventore ipsum laboriosam libero,
  mollitia nam necessitatibus officia quae quis quisquam repellat rerum sapiente sint sit soluta veritatis
  voluptas voluptate? Amet cupiditate enim error, esse ex impedit magni nemo nisi, nulla quos sapiente sequi vitae. Ducimus fugit
  in numquam qui. Aut dicta eaque laboriosam minus molestias non, nulla quas veniam! Fugiat incidunt modi quam recusandae totam voluptatibus voluptatum? Ab animi asperiores autem cupiditate,
  dolores exercitationem illum inventore libero natus non pariatur perspiciatis quibusdam repellat sit totam vero
  voluptates? Sequi, vel?` );
/* eslint-enable max-len */

export const allRows = _map( lorem, ( content ) => {
  const id = uuid();

  return ({
    value: `${ content }#${ id }`,
    answerID: `answerID#${ id }`,
    id,
    weight: _random( 5 ),
    edit: false,
  });
});

const mockData = {
  rows: _slice(
    allRows,
    0,
    25,
  ),
};

export default mockData;
