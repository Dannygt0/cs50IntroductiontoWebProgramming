#include <cs50.h>
#include <ctype.h>
#include <math.h>
#include <stdio.h>
#include <string.h>

int contar_letras(string texto);
int contar_palabras(string texto);
int contar_oraciones(string texto);

int main(void)
{
    // Ask the user for the text
    string texto = get_string("Texto: ");

    // With this you can count the number of letters, words, and sentences

    int letras = contar_letras(texto);
    int palabras = contar_palabras(texto);
    int oraciones = contar_oraciones(texto);

    float L = ((float) letras / (float) palabras) * 100;
    float S = ((float) oraciones / (float) palabras) * 100;

    float index = 0.0588 * L - 0.296 * S - 15.8;
    int grade = round(index);
    // Print grade level
    if (grade < 1)
    {
        printf("Before Grade 1\n");
    }
    else if (grade >= 16)
    {
        printf("Grade 16+\n");
    }
    else
    {
        printf("Grade %i\n", grade);
    }
}
// Funcion contar los numeros de las letras
int contar_letras(string texto)
{
    int count = 0;
    for (int i = 0, n = strlen(texto); i < n; i++)
    {
        if (isalpha(texto[i]))
        {
            count++;
        }
    }
    return count;
}
// Funcion para contar el numero de palabras en el texto
int contar_palabras(string texto)
{
    int count = 1;
    for (int i = 0, n = strlen(texto); i < n; i++)
    {
        if (texto[i] == ' ')
        {
            count++;
        }
    }
    return count;
}

int contar_oraciones(string texto)
{
    int count = 0;
    for (int i = 0, n = strlen(texto); i < n; i++)
    {
        if (texto[i] == '.' || texto[i] == '!' || texto[i] == '?')
        {
            count++;
        }
    }
    return count;
}
