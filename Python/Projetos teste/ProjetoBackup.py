# janela para selecionar a pasta  usando bibliotecas python
import os
from tkinter.filedialog import askdirectory
import shutil

nome_da_pasta_selecionada = askdirectory()
print("nome_da_pasta_selecionada")

lista_arquivos = os.listdir(nome_da_pasta_selecionada)
print("lista_arquivos")

# rodando certo até aqui

# fazer backup dos arquivos da pasta
nome_pasta_backup = "backup"
nome_completo_pasta_backup = f"{nome_da_pasta_selecionada}/{nome_pasta_backup}"
if not os.path.exists(nome_completo_pasta_backup):
    os.mkdir(nome_completo_pasta_backup)  # biblioteca para criação da pasta


for arquivo in lista_arquivos:
    print(arquivo)
    nome_completo_arquivo = f"{nome_da_pasta_selecionada}/{arquivo}"  # uso de f-strings para formatar e string e exibir os dados das variaveis
    nome_final_do_arquivo = f"{nome_completo_pasta_backup}/{arquivo}"
    if "." in arquivo:
        shutil.copy2(
            nome_completo_arquivo, nome_final_do_arquivo
        )  # biblioteca para copiar os arquivos e colar
    elif not "backup" != arquivo:
        shutil.copytree(
            nome_completo_arquivo, nome_da_pasta_selecionada
        )  # evitar que haja copia de um arquivo homonimo na pasta
