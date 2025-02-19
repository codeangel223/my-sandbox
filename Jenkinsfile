pipeline {
    agent any

    stages {
        stage('Recuperation du projet') {
            steps {
                git 'https://github.com/codeangel223/my-sandbox.git'
            }
        }
        stage('Installation des dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
    }
}
