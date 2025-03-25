#include <cs50.h>
#include <stdio.h>

int main(void)
{
    {
        string name = get_string("Cual es tu nombre ");
        int age = get_int("Cual es tu edad ");
        string hometown = get_string("Cual es tu ciudad de origen ");
        string phoneNumber = get_string("Cual es tu numero de telefono ");
        printf("Hola mi nombre es %s, y cuento con la fantastica edad de %i, soy de un pequeno "
               "pueblo llamado %s, y mi numero de telefono es %s \n",
               name, age, hometown, phoneNumber);

        int max = get_int("Cuantos numeros quieres que repitamos: ");
        int i = 0;
        while (i <= max)
        {
            printf("%i,\n", i);
            i++;
        }
    }
    int maxLetra = get_int("Cuantas veces quieres que se repita el simbolo o letra ");
    string simbolo = get_string("Ingresa el simbolo a jugar ");

    for (int i = 0; i < maxLetra; i++)
    {
        printf("%s\n", simbolo);
    }
}
