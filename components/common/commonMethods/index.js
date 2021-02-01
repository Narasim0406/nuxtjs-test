//common methods
class CommonMethods {

    filterData = (list_data, search_value, obj_key)  => {
        
        if(!list_data || !search_value) 
            return list_data;
        
        var new_list_data = Array.isArray(list_data) ? [] : {};

        if(Array.isArray(list_data)) {
            new_list_data = (list_data).filter((value) => {
                return value[obj_key].toLowerCase().includes(search_value.toLowerCase());
            })
        } else if(Object.keys(list_data).length > 0) {
            Object.keys(list_data).map((index) => {
                if(list_data[index][obj_key].toLowerCase().includes(search_value.toLowerCase())) {
                    new_list_data[index] = list_data[index];
                }
            })
        }
        return new_list_data;
    }
}

export default new CommonMethods();