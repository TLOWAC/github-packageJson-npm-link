function urlCheck() {}

function isGithub() {}
function isPackageJson() {}

/* --------------------------- check : dependency --------------------------- */
// NOTE : Package.json 에 정의되어 있는 디펜던시의 종류를 확인합니다.

/**
 * PeerDependency 존재 여부를 확인합니다.
 */
function hasPeerDependency() {}

/**
 * dependency 존재 여부를 확인합니다.
 */
function hasDependency() {}

/**
 * devDependency 존재 여부를 확인합니다.
 */
function hasDevDependency() {}

/* --------------------------- parse : dependency --------------------------- */
// NOTE : Package.json 에 정의되어 있는 디펜던시를 파싱합니다.
type DependencyType = "default" | "peer" | "dev";

function parseDependencyFromPackageJson(dependencyType: DependencyType) {}

function searchNpmByModuleName(params: { moduleName: string }) {}

searchNpmByModuleName({ moduleName: "" });
