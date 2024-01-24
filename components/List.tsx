type ListParams = {
  Des: string;
};

function List(props: ListParams) {
  return <p>{props.Des}</p>;
}

export default List;
