module.exports = {
  sc_plugin_api_version: 1,
  plugin_name: "my_plugin",

  // Exemple : ajouter un type de champ
  fieldviews: {
    my_custom_view: {
      isEdit: true,
      run: (field_name, value, attrs, cls) => {
        return `<input type="text" name="${field_name}" value="${value || ""}" class="${cls}">`;
      }
    }
  }
};