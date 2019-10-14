import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
   return (
      <div className="ui container comments">
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
         <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            date={faker.date.month()}
            text={faker.lorem.words(30)}
         />
      </div>
   );
};

ReactDOM.render(<App />, document.querySelector('#root'));
