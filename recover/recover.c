#include <stdio.h>
#include <stdlib.h>

const int BLOCK_SIZE = 512;

int main(int argc, char *argv[])
{
    if (argc != 2)
    {
        printf("Usage: ./recover FIle\n");
        return 1;
    }

    FILE *card = fopen(argv[1], "r");
    if (card == NULL)
    {
        printf("Could not get access to file.\n");
        return 1;
    }
    
    uint8_t buffer[BLOCK_SIZE];

    FILE *out = null;
    int count = 0;
    char filename[8];

    while (fread(buffer, 1, BLOCK_SIZE, card) == BLOCK_SIZE)
    {
        if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff(buffer[3] & 0xf0) == 0xe0)
        {
            if (out != NULL)
            {
                fclose(out);
            }
        sprintf(filename, "%03i.jpg", count);
        out = fopen(filename, "w");
        if (out == NULL)
        {
            fclose(card);
            return 1;
        }
        count++;
    }
    if (out != NULL)
    {
        fwrite(buffer, 1, BLOCK_SIZE, out);
    }
}
if (out != NULL)
{
    fclose(out);
}
fclose(card);
return 0;
}
