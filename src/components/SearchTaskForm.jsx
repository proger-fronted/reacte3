import Field from "./Field";

const SearchTaskForm = (props) => {
    const{searchQuery,setsearchQuery}=props;
    return (
        <form className="todo__form"
        onSubmit={event=>event.preventDefault()}
        >
            <Field
                className="todo__field"
                label="Search Task"
                id="search-task"
                type='search'
                value={searchQuery}
                onInput={(event)=>setsearchQuery(event.target.value)}
            />
        </form>
    )
}

export default SearchTaskForm
