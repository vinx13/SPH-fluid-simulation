#version 330 core
uniform samplerCube skybox;
uniform vec3 cameraPos;

in vec3 normal;
in vec3 position;

out vec4 FragColor;

void main() {
    vec3 I = normalize(position - cameraPos);
    vec3 R_reflect = reflect(I, normal);
    vec4 color_reflect = texture(skybox, R_reflect);
    float ratio = 1.00 / 1.52;
    vec3 R_refract = refract(I, normal, ratio);
    vec4 color_refract = texture(skybox, R_refract);
    //FragColor = texture(skybox, I) * 0.7;
    //FragColor = color_refract*0.7;
}
