const enhanced = require("enhanced-resolve");

const createResolver = (primaryCondition) =>
    enhanced.create.sync({
        conditionNames: [primaryCondition, "node", "default"],
        extensions: [".js", ".json", ".node", ".ts"],
    });

const importResolver = createResolver("import");
const requireResolver = createResolver("require");

module.exports = function (request, options) {
    const isEsm = options.conditions?.includes("import");
    const resolver = isEsm ? importResolver : requireResolver;
    return resolver(options.basedir, request);
};
